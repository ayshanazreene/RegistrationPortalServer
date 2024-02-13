const  mongoose=require('mongoose')

const connectionString=process.env.connection_string;

mongoose.connect(connectionString).then(()=>{
    console.log("mongDb connected with RP Server");
}).catch((err)=>{
    console.log("mongoDB connection failed::",err);
}
)