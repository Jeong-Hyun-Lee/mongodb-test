module.exports = function(app, Book)
{
    // GET ALL BOOKS
    app.get('/books', function(req,res){
      res.send('books coming')
      res.end();
    });

    // GET SINGLE BOOK
    app.get('/books/:book_id', function(req, res){
        res.end();
    });

    // GET BOOK BY AUTHOR
    app.get('/books/author/:author', function(req, res){
        res.end();
    });

    // CREATE BOOK
    app.post('/books', function(req, res){
      console.log(req.body)
      // if (req.body === {}) {
      //   res.json({result: 0})
      //   return
      // }
      // var book = new Book();
      // book.title = req.body.title;
      // book.author = req.body.author;
      // book.published_date = new Date(req.body.published_date);
  
      // book.save(function(err){
      //   if(err){
      //       console.error(err);
      //       res.json({result: 0});
      //       return;
      //   }
        res.json({result: 1});
        // res.end();
      // });
    });

    // UPDATE THE BOOK
    app.put('/books/:book_id', function(req, res){
        res.end();
    });

    // DELETE BOOK
    app.delete('/books/:book_id', function(req, res){
        res.end();
    });
}