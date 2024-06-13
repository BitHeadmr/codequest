import mongoose from "mongoose"

const Questionschema=mongoose.Schema({
    questiontitle:{type:String,required:"Question must have a title"},
    questionbody:{type:String,required:"Question must have a body"},
    questiontags:{type:[String],required:"Question must have a tags"},
    noofanswers:{type:Number,default:0},
    upvote:{type:[String],default:[]},
    downvote:{type:[String],default:[]},
    userposted:{type:String,required:"Question must have an author"},
    userid:{type:String},
    askedon:{type:Date,default:Date.now},
    answer:[
        {
            answerbody:String,
            useranswered:String,
            userid:String,
            answeredon:{type:Date,default:Date.now}
        },
    ],
});
export default mongoose.model("Question",Questionschema)