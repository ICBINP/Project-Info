//schema for characters

const userSchema = new mongoose.Schema({
    name: String,
    characters: [{type: Schema.Types.ObjectId, ref: 'character'}]
})


const characterSchema = new mongoose.Schema({
    name: String,
    class: String,
    stats: {
        hp: Number,
        mana: Number
    },
    alignment: String,
    weapon: String
})

module.exports = mongoose.model('Character, User', userSchema, characterSchema)