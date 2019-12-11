const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/orm-mongo', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        const UserSchema = mongoose.Schema({
            username: String,
            password: Number
        })
        const User = mongoose.model('User', UserSchema)

        //Create
        const user1 = new User({ username: 'aloha', password: 123456})
        user1.save(() => console.log('saved...'))

        //Read
        User.findOne({}, (err, docs) => {
            console.log(docs)
        })

        //Update
        User.updateOne({
            _id: '5df16dc416421d2548490021'
        },
        {
            $set: {
                username: 'marrys',
                password: 112233
            }
        }, (err, res) => console.log(err))

        //Delete
        User.remove({
            _id: '5df16ded46fbed65c8ad8049'
        }, (err, res) => {
            console.log(err)
        })
    })
