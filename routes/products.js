/**
 * Created by Owner on 11/17/2016.
 */
 /** File Name: products.js
 Author's Name: Vaishali Sareen
 WebSite Name: https://productapplication.herokuapp.com/
 File Description:This js file is the  controller for the deleteing, adding and updating the product**/

var express = require('express');
var router = express.Router();

//link to the product model
var Product = require('../models/product');
// authentication check
function isLoggedIn (req,res,next) {
    if(req.isAuthenticated()){
        next();
    }
    else{
        res.redirect('/login');
    }
}
//GET main products page
router.get('/', isLoggedIn, function(req, res, next) {

    Product.find(function(err, products) {
        if (err)
        {
            console.log(err);
            res.render('error');
        }
        else
        {
            //load the products list
            res.render('products',
            {
                title: 'Inventory Record',
                products: products,
                user: req.user
            });
        }
    });
});

//this is to get the form to add the product
router.get('/add', isLoggedIn , function(req, res, next)
{
    res.render('addproduct',
        {
            title: 'Add a New product',
            user: req.user
        });
});

//this is to add the product to the database
router.post('/add', isLoggedIn , function(req, res, next) {

    Product.create(
    {
        name: req.body.name,
        Company: req.body.Company,
        Price: req.body.Price,
        Ram: req.body.Ram,
        Processor: req.body.Processor,
        Color: req.body.Color,
        Quantity: req.body.Quantity

    },
        function(err, Product)
    {
        if (err)
        {
            console.log(err);
            res.render('error',
            {
                message: 'Could not Add Product'
            });
        }
        else
        {
            // show the products list
            res.redirect('/products');
        }
    });
});

/* get delete  and make the delete function */
router.get('/delete/:_id', isLoggedIn , function (req,res,next)
{
    var _id = req.params._id;

// delete the particular product selected
Product.remove({_id: _id} , function (err) {
    if(err)
    {
        console.log(err);
        res.render('error',
        {
            message:' Could not delete the product',
            error: err
        });
    }
    else
        {
            //show the products list with the selected record deleted
            res.redirect('/products');
        }

});
});

/*t this is to get the form filled with the product the user wants to delete */
router.get('/:_id', isLoggedIn , function (req,res,next)
{
    // obtain id from the url
    var _id = req.params._id;

    Product.findById({_id: _id}, function (err, Product)
    {
        if(err)
        {
            console.log(err);
            res.render('error',
            {
                message:' Could not load the products page',
                error: err
            });
        }
        else
        {
            res.render('editproducts',
            {
                title: 'Edit Products',
                Product: Product,
                user: req.user

            });
}

    });
});
/** process the update form **/

router.post('/:_id', isLoggedIn ,function (req,res,next)
{
    // get id from url
    var _id = req.params._id;

    // create the product with the new values
    var product = new Product
    ({
        _id: _id,
        name: req.body.name,
        Company: req.body.Company,
        Price: req.body.Price,
        Ram: req.body.Ram,
        Processor: req.body.Processor,
        Color: req.body.Color,
        Quantity: req.body.Quantity
    });
    //update the product
    Product.update({ _id: _id}, product, function (err)
    {
        if (err)
        {
            console.log(err);
            res.render('error',
            {
                message: 'Could not edit the product',
                error: err
            });
        }
        else
            {
                // show the updated list
            res.redirect('/products');
            }
    });

});


//making files public
module.exports = router;