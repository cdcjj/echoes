'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('album').del().then(function () {
    // Inserts seed entries
    return knex('album').insert([{ title: 'Helplessness Blues', artist_id: 1, genre: 'Alternative', year: 2011, art_url60: 'http://is5.mzstatic.com/image/thumb/Music60/v4/6c/7d/e5/6c7de567-99ff-e8ab-46ad-07ddab4b1d32/source/60x60bb.jpg', art_url100: 'http://is5.mzstatic.com/image/thumb/Music60/v4/6c/7d/e5/6c7de567-99ff-e8ab-46ad-07ddab4b1d32/source/100x100bb.jpg' }, { title: 'Pleased to Meet Me', artist_id: 2, genre: 'Rock', year: 1987, art_url60: 'http://is3.mzstatic.com/image/thumb/Music/v4/61/55/3a/61553af0-864d-dc75-449e-659e758e6a6e/source/60x60bb.jpg', art_url100: 'http://is3.mzstatic.com/image/thumb/Music/v4/61/55/3a/61553af0-864d-dc75-449e-659e758e6a6e/source/100x100bb.jpg' }, { title: 'The Life of Pablo', artist_id: 3, genre: 'Hip-Hop/Rap', year: 2016, art_url60: 'http://is3.mzstatic.com/image/thumb/Music20/v4/c0/98/d0/c098d05b-7bcc-0ea3-0213-0f69992fda65/source/60x60bb.jpg', art_url100: 'http://is3.mzstatic.com/image/thumb/Music20/v4/c0/98/d0/c098d05b-7bcc-0ea3-0213-0f69992fda65/source/100x100bb.jpg' }]);
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlZWRzL3ByZXRlbmRhbGJ1bS5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwic2VlZCIsImtuZXgiLCJQcm9taXNlIiwiZGVsIiwidGhlbiIsImluc2VydCIsInRpdGxlIiwiYXJ0aXN0X2lkIiwiZ2VucmUiLCJ5ZWFyIiwiYXJ0X3VybDYwIiwiYXJ0X3VybDEwMCJdLCJtYXBwaW5ncyI6Ijs7QUFDQUEsUUFBUUMsSUFBUixHQUFlLFVBQVNDLElBQVQsRUFBZUMsT0FBZixFQUF3QjtBQUNyQztBQUNBLFNBQU9ELEtBQUssT0FBTCxFQUFjRSxHQUFkLEdBQ0pDLElBREksQ0FDQyxZQUFZO0FBQ2hCO0FBQ0EsV0FBT0gsS0FBSyxPQUFMLEVBQWNJLE1BQWQsQ0FBcUIsQ0FDMUIsRUFBQ0MsT0FBTSxvQkFBUCxFQUE2QkMsV0FBVSxDQUF2QyxFQUEwQ0MsT0FBTSxhQUFoRCxFQUErREMsTUFBSyxJQUFwRSxFQUEwRUMsV0FBVSxpSEFBcEYsRUFBdU1DLFlBQVcsbUhBQWxOLEVBRDBCLEVBRTFCLEVBQUNMLE9BQU0sb0JBQVAsRUFBNkJDLFdBQVUsQ0FBdkMsRUFBMENDLE9BQU0sTUFBaEQsRUFBd0RDLE1BQUssSUFBN0QsRUFBbUVDLFdBQVUsK0dBQTdFLEVBQThMQyxZQUFXLGlIQUF6TSxFQUYwQixFQUcxQixFQUFDTCxPQUFNLG1CQUFQLEVBQTRCQyxXQUFVLENBQXRDLEVBQXlDQyxPQUFNLGFBQS9DLEVBQThEQyxNQUFLLElBQW5FLEVBQXlFQyxXQUFVLGlIQUFuRixFQUFzTUMsWUFBVyxtSEFBak4sRUFIMEIsQ0FBckIsQ0FBUDtBQUtELEdBUkksQ0FBUDtBQVNELENBWEQiLCJmaWxlIjoicHJldGVuZGFsYnVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnRzLnNlZWQgPSBmdW5jdGlvbihrbmV4LCBQcm9taXNlKSB7XG4gIC8vIERlbGV0ZXMgQUxMIGV4aXN0aW5nIGVudHJpZXNcbiAgcmV0dXJuIGtuZXgoJ2FsYnVtJykuZGVsKClcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBJbnNlcnRzIHNlZWQgZW50cmllc1xuICAgICAgcmV0dXJuIGtuZXgoJ2FsYnVtJykuaW5zZXJ0KFtcbiAgICAgICAge3RpdGxlOidIZWxwbGVzc25lc3MgQmx1ZXMnLCBhcnRpc3RfaWQ6MSwgZ2VucmU6J0FsdGVybmF0aXZlJywgeWVhcjoyMDExLCBhcnRfdXJsNjA6J2h0dHA6Ly9pczUubXpzdGF0aWMuY29tL2ltYWdlL3RodW1iL011c2ljNjAvdjQvNmMvN2QvZTUvNmM3ZGU1NjctOTlmZi1lOGFiLTQ2YWQtMDdkZGFiNGIxZDMyL3NvdXJjZS82MHg2MGJiLmpwZycsIGFydF91cmwxMDA6J2h0dHA6Ly9pczUubXpzdGF0aWMuY29tL2ltYWdlL3RodW1iL011c2ljNjAvdjQvNmMvN2QvZTUvNmM3ZGU1NjctOTlmZi1lOGFiLTQ2YWQtMDdkZGFiNGIxZDMyL3NvdXJjZS8xMDB4MTAwYmIuanBnJ30sXG4gICAgICAgIHt0aXRsZTonUGxlYXNlZCB0byBNZWV0IE1lJywgYXJ0aXN0X2lkOjIsIGdlbnJlOidSb2NrJywgeWVhcjoxOTg3LCBhcnRfdXJsNjA6J2h0dHA6Ly9pczMubXpzdGF0aWMuY29tL2ltYWdlL3RodW1iL011c2ljL3Y0LzYxLzU1LzNhLzYxNTUzYWYwLTg2NGQtZGM3NS00NDllLTY1OWU3NThlNmE2ZS9zb3VyY2UvNjB4NjBiYi5qcGcnLCBhcnRfdXJsMTAwOidodHRwOi8vaXMzLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9NdXNpYy92NC82MS81NS8zYS82MTU1M2FmMC04NjRkLWRjNzUtNDQ5ZS02NTllNzU4ZTZhNmUvc291cmNlLzEwMHgxMDBiYi5qcGcnfSxcbiAgICAgICAge3RpdGxlOidUaGUgTGlmZSBvZiBQYWJsbycsIGFydGlzdF9pZDozLCBnZW5yZTonSGlwLUhvcC9SYXAnLCB5ZWFyOjIwMTYsIGFydF91cmw2MDonaHR0cDovL2lzMy5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvTXVzaWMyMC92NC9jMC85OC9kMC9jMDk4ZDA1Yi03YmNjLTBlYTMtMDIxMy0wZjY5OTkyZmRhNjUvc291cmNlLzYweDYwYmIuanBnJywgYXJ0X3VybDEwMDonaHR0cDovL2lzMy5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvTXVzaWMyMC92NC9jMC85OC9kMC9jMDk4ZDA1Yi03YmNjLTBlYTMtMDIxMy0wZjY5OTkyZmRhNjUvc291cmNlLzEwMHgxMDBiYi5qcGcnfVxuICAgICAgXSk7XG4gICAgfSk7XG59O1xuIl19