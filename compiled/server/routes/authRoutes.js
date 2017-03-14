'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var knex = require('../../db/db.js');
var util = require('../utilities.js');

// get requests are served static sign in page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../client/signin.html'));
});

// post requests check username and password and redirect
router.post('/', function (req, res) {
  // get username and password from request body
  var username = req.body.username;
  var password = req.body.password;
  // knex query to search database for user
  var query = knex('user').where('username', username);
  query.then(function (result) {
    //if user does not exist
    if (!result.length) {
      // respond with status
      res.status(401).send('This user does not exist!');
      // if user exists
    } else {
      var hash = knex('user').where('username', username).select('password');
      hash.then(function (hash) {
        //knex returns an array with hash object at index 0
        hash = hash[0].password;
        util.checkPassword(password, hash, function (err, result) {
          if (err) {
            throw err;
          } else {
            // if password is correct
            if (result) {
              // set cookies
              res.cookie('signedIn', true);
              res.cookie('username', username);
              // redirect to dashboard
              res.redirect('/');
              // if password is incorrect
            } else {
              // send error
              res.status(401).send('Your password is incorrect');
            }
          }
        });
      }).catch(function (err) {
        console.log('Something went wrong comparing passwords');
        throw err;
      });
    }
  });
});
module.exports = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9yb3V0ZXMvYXV0aFJvdXRlcy5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInJvdXRlciIsIlJvdXRlciIsInBhdGgiLCJrbmV4IiwidXRpbCIsImdldCIsInJlcSIsInJlcyIsInNlbmRGaWxlIiwiam9pbiIsIl9fZGlybmFtZSIsInBvc3QiLCJ1c2VybmFtZSIsImJvZHkiLCJwYXNzd29yZCIsInF1ZXJ5Iiwid2hlcmUiLCJ0aGVuIiwicmVzdWx0IiwibGVuZ3RoIiwic3RhdHVzIiwic2VuZCIsImhhc2giLCJzZWxlY3QiLCJjaGVja1Bhc3N3b3JkIiwiZXJyIiwiY29va2llIiwicmVkaXJlY3QiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVVDLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUMsU0FBU0YsUUFBUUcsTUFBUixFQUFiO0FBQ0EsSUFBSUMsT0FBT0gsUUFBUSxNQUFSLENBQVg7QUFDQSxJQUFJSSxPQUFPSixRQUFRLGdCQUFSLENBQVg7QUFDQSxJQUFJSyxPQUFPTCxRQUFRLGlCQUFSLENBQVg7O0FBRUE7QUFDQUMsT0FBT0ssR0FBUCxDQUFXLEdBQVgsRUFBZ0IsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ2xDQSxNQUFJQyxRQUFKLENBQWFOLEtBQUtPLElBQUwsQ0FBVUMsU0FBVixFQUFxQiwyQkFBckIsQ0FBYjtBQUNELENBRkQ7O0FBSUE7QUFDQVYsT0FBT1csSUFBUCxDQUFZLEdBQVosRUFBaUIsVUFBVUwsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ25DO0FBQ0EsTUFBSUssV0FBV04sSUFBSU8sSUFBSixDQUFTRCxRQUF4QjtBQUNBLE1BQUlFLFdBQVdSLElBQUlPLElBQUosQ0FBU0MsUUFBeEI7QUFDQTtBQUNBLE1BQUlDLFFBQVFaLEtBQUssTUFBTCxFQUFhYSxLQUFiLENBQW1CLFVBQW5CLEVBQStCSixRQUEvQixDQUFaO0FBQ0FHLFFBQU1FLElBQU4sQ0FBVyxVQUFTQyxNQUFULEVBQWlCO0FBQzFCO0FBQ0EsUUFBSSxDQUFDQSxPQUFPQyxNQUFaLEVBQW9CO0FBQ2xCO0FBQ0FaLFVBQUlhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQiwyQkFBckI7QUFDQTtBQUNELEtBSkQsTUFJTztBQUNMLFVBQUlDLE9BQU9uQixLQUFLLE1BQUwsRUFBYWEsS0FBYixDQUFtQixVQUFuQixFQUErQkosUUFBL0IsRUFBeUNXLE1BQXpDLENBQWdELFVBQWhELENBQVg7QUFDQUQsV0FBS0wsSUFBTCxDQUFVLFVBQVVLLElBQVYsRUFBZ0I7QUFDeEI7QUFDQUEsZUFBT0EsS0FBSyxDQUFMLEVBQVFSLFFBQWY7QUFDQ1YsYUFBS29CLGFBQUwsQ0FBbUJWLFFBQW5CLEVBQTZCUSxJQUE3QixFQUFtQyxVQUFVRyxHQUFWLEVBQWVQLE1BQWYsRUFBdUI7QUFDeEQsY0FBSU8sR0FBSixFQUFTO0FBQ1Asa0JBQU1BLEdBQU47QUFDRCxXQUZELE1BRU87QUFDTDtBQUNBLGdCQUFJUCxNQUFKLEVBQVk7QUFDVjtBQUNBWCxrQkFBSW1CLE1BQUosQ0FBVyxVQUFYLEVBQXVCLElBQXZCO0FBQ0FuQixrQkFBSW1CLE1BQUosQ0FBVyxVQUFYLEVBQXVCZCxRQUF2QjtBQUNBO0FBQ0FMLGtCQUFJb0IsUUFBSixDQUFhLEdBQWI7QUFDQTtBQUNELGFBUEQsTUFPTztBQUNMO0FBQ0FwQixrQkFBSWEsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLDRCQUFyQjtBQUNEO0FBQ0Y7QUFDRixTQWpCRDtBQWtCRixPQXJCRCxFQXNCQ08sS0F0QkQsQ0FzQk8sVUFBVUgsR0FBVixFQUFlO0FBQ3BCSSxnQkFBUUMsR0FBUixDQUFZLDBDQUFaO0FBQ0EsY0FBTUwsR0FBTjtBQUNELE9BekJEO0FBMEJEO0FBQ0YsR0FuQ0Q7QUFvQ0QsQ0ExQ0Q7QUEyQ0FNLE9BQU9DLE9BQVAsR0FBaUJoQyxNQUFqQiIsImZpbGUiOiJhdXRoUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGtuZXggPSByZXF1aXJlKCcuLi8uLi9kYi9kYi5qcycpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMuanMnKTtcblxuLy8gZ2V0IHJlcXVlc3RzIGFyZSBzZXJ2ZWQgc3RhdGljIHNpZ24gaW4gcGFnZVxucm91dGVyLmdldCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICByZXMuc2VuZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJy8uLi8uLi9jbGllbnQvc2lnbmluLmh0bWwnKSk7XG59KTtcblxuLy8gcG9zdCByZXF1ZXN0cyBjaGVjayB1c2VybmFtZSBhbmQgcGFzc3dvcmQgYW5kIHJlZGlyZWN0XG5yb3V0ZXIucG9zdCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAvLyBnZXQgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGZyb20gcmVxdWVzdCBib2R5XG4gIHZhciB1c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lO1xuICB2YXIgcGFzc3dvcmQgPSByZXEuYm9keS5wYXNzd29yZDtcbiAgLy8ga25leCBxdWVyeSB0byBzZWFyY2ggZGF0YWJhc2UgZm9yIHVzZXJcbiAgdmFyIHF1ZXJ5ID0ga25leCgndXNlcicpLndoZXJlKCd1c2VybmFtZScsIHVzZXJuYW1lKTtcbiAgcXVlcnkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAvL2lmIHVzZXIgZG9lcyBub3QgZXhpc3RcbiAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgIC8vIHJlc3BvbmQgd2l0aCBzdGF0dXNcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdUaGlzIHVzZXIgZG9lcyBub3QgZXhpc3QhJyk7XG4gICAgICAvLyBpZiB1c2VyIGV4aXN0c1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaGFzaCA9IGtuZXgoJ3VzZXInKS53aGVyZSgndXNlcm5hbWUnLCB1c2VybmFtZSkuc2VsZWN0KCdwYXNzd29yZCcpO1xuICAgICAgaGFzaC50aGVuKGZ1bmN0aW9uIChoYXNoKSB7XG4gICAgICAgIC8va25leCByZXR1cm5zIGFuIGFycmF5IHdpdGggaGFzaCBvYmplY3QgYXQgaW5kZXggMFxuICAgICAgICBoYXNoID0gaGFzaFswXS5wYXNzd29yZDtcbiAgICAgICAgIHV0aWwuY2hlY2tQYXNzd29yZChwYXNzd29yZCwgaGFzaCwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gaWYgcGFzc3dvcmQgaXMgY29ycmVjdFxuICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgIC8vIHNldCBjb29raWVzXG4gICAgICAgICAgICAgICByZXMuY29va2llKCdzaWduZWRJbicsIHRydWUpO1xuICAgICAgICAgICAgICAgcmVzLmNvb2tpZSgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gICAgICAgICAgICAgICAvLyByZWRpcmVjdCB0byBkYXNoYm9hcmRcbiAgICAgICAgICAgICAgIHJlcy5yZWRpcmVjdCgnLycpO1xuICAgICAgICAgICAgICAgLy8gaWYgcGFzc3dvcmQgaXMgaW5jb3JyZWN0XG4gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIC8vIHNlbmQgZXJyb3JcbiAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdZb3VyIHBhc3N3b3JkIGlzIGluY29ycmVjdCcpO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nIGNvbXBhcmluZyBwYXNzd29yZHMnKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXX0=