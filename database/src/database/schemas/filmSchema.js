const { Schema } = require('mongoose');
const { ClientError } = require('../../utils/errors')

const filmSchema = new Schema(  {
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{type: String, ref: 'Character'}],
  planets: [{type: String, ref: 'Planet'}]
});


filmSchema.statics.list = async function(){ 
  
  const response = await this.find()
  .populate('characters', ['_id', 'name'])
  .populate('planets', ['_id', 'name'])

  if(!response){
    throw new ClientError("Films not found", 404);
  } else {
    return response;
  }
};

filmSchema.statics.get = async function(id){

  const response = await this.findById(id)
  .populate('characters', ['_id', 'name'])
  .populate('planets', ['_id', 'name'])
  
  if(!response){
    throw new ClientError("Film not found", 404);
  } else {
    return response;
  }
}

filmSchema.statics.insert = async function(data){
  const { _id } = data;
  const reponse = await this.findOne({ _id });

  if (reponse) {

    throw new ClientError("Film already exists", 409);

  } else {

    const dataCreted = await this.create(data)
    return dataCreted
  }
}

filmSchema.statics.delete = async function (id) {
  const response = await this.findByIdAndDelete(id);
  if (!response) {
    throw new ClientError("Film not found", 404);
  }
  return response;
};

filmSchema.statics.put = async function (id, data) {
  const response = await this.findByIdAndUpdate(id, data, {
    new: true, // Devuelve el documento modificado
  });
  if (!response) {
    throw new ClientError("Film not found", 404);
  }
  return response;
};


module.exports = filmSchema;