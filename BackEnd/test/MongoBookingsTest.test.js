const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');



const index = require('../index.js');
const {MongoBookings} = require('../persistence/MongoBookings.js')
const {Movies} = require('../persistence/Movies.js')
const {Discussion} = require('../persistence/Discussion.js')

chai.use(chaiHttp)

describe('MongoBookingsTesting', function () {

    //creating a test object
    const testMongoBooking = {
        movieTitle: "test",
    
        dateTime: "2015-03-25T00:00:00.000+00:00",
        userName: "test",
        noOfSeats: 2,
        adult: 2,
        child: 2,
        concession: 1
    };

    const testMoviesSchema = {
        title: 'test',
        img: 'test.png',
        actors: 'test',
        director: 'test',
        releaseDate: '2015-03-25T00:00:00.000+00:00',
        description: 'a test'
    };
    const testDiscussionSchema = {
        movie_id: "test",
        datePosted: '2015-03-25T00:00:00.000+00:00',
        userName: "test",
        comment: "test",
        rating: 2
        };


    it('testing routes', function (done) {
        //tell chai to use index.js
        chai.request(index)

            //use index.js to make a get request with /test
            .post("/create")
            .send(testMongoBooking)
            .end((err, response) => {
                if (err) {
                    console.log("Error!");
                    done(err);
                };

                console.log("************************");
                console.log(response.text);
                console.log("**************************");

                expect(err).to.be.null;
                expect(response).to.have.status(201);
                expect(response.text).to.be.a("string");
                expect(response).to.have.property('text',`${testMongoBooking.movieTitle} saved to database!`)
                done();
            });

    });

    it('testing the direct route', function (done) {

        chai.request(index)

            //use index.js to make a get request with /test
            .post("/direct")
            .send(testMoviesSchema)
            .end((err, response) => {
                if (err) {
                    console.log("Error!");
                    done(err);
                };

                console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

                console.log("************************");
                console.log(response.text);
                console.log("**************************");

                expect(err).to.be.null;
                expect(response).to.have.status(201);
                expect(response.text).to.be.a("string");
                expect(response).to.have.property('text', `${testMoviesSchema.title} saved to database!`)
                console.log("done");
                done();
            });
        
    })
    it('getting all', function (done) {
        chai.request(index)
            .get("/getAll")
            .end((err, response) => {
                if (err) {
                    console.log("Error!");
                    done(err);
                };

                const body = response.body;
                console.log('**************************');
                console.log(body);
                expect(response).to.have.status(200);
                expect(response.text).to.not.be.null;

                body.map((MongoBookings) => {
                    expect(MongoBookings).to.contain.keys("movieTitle");
                    expect(MongoBookings).to.be.a("Object");
                });
                done();
        })
    })

    it('watch All', function (done) {
        chai.request(index)
            .get("/watchAll")
            .end((err, response) => {
                if (err) {
                    console.log("Error");
                    done(err);
                };
                const body = response.body;
                console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
                console.log(body);
                expect(response).to.have.status(200);
                expect(response.text).to.not.be.null;

                body.map((Movies) => {
                    expect(Movies).to.contain.keys("title");
                    expect(Movies).to.be.a("Object");
                })
                done();
        })
    })

    it('review comments', function (done) {
        chai.request(index)
            .get("/getAllComments")
            .end((err, response) => {
                if (err) {
                    console.log("Error");
                    done(err);
                };
                const body = response.body;
                console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
                console.log(body);
                expect(response).to.have.status(200);
                expect(response.text).to.not.be.null;

                body.map((Discussion) => {
                    expect(Discussion).to.contain.keys("movie_id");
                    expect(Discussion).to.be.a("Object");
                })
                done();
        })
    })

it('creating a comment', function (done) {

        chai.request(index)

            //use index.js to make a get request with /test
            .post("/createComment")
            .send(testDiscussionSchema)
            .end((err, response) => {
                if (err) {
                    console.log("Error!");
                    done(err);
                };

                console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

                console.log("************************");
                console.log(response.text);
                console.log("**************************");

                expect(err).to.be.null;
                expect(response).to.have.status(201);
                expect(response.text).to.be.a("string");
                console.log("done");
                done();
            });
        
    })


        
});    
