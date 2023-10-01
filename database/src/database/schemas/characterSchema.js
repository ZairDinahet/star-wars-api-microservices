const { Schema } = require('mongoose');
const { ClientError } = require('../../utils/errors')

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: {type: String, ref: 'Planet'}, // REFERENCIA A EL id DEL PLANETA
  films: [{type: String, ref: 'Film'}] // ARRAY DE REFERENCIAS A PELICULAS 
})

characterSchema.statics.list = async function(){

  const response = await this.find()
  .populate('homeworld', ['_id', 'name'])
  .populate('films', ['_id', 'title'])

  if(!response){
    throw new ClientError("Characters not found", 404);
  } else {
    return response;
  }

};

characterSchema.statics.get = async function(id){
  
  const response = await this.findById(id)
  .populate('homeworld', ['_id', 'name'])
  .populate('films', ['_id', 'title'])

  if(!response){
    throw new ClientError("Character not found", 404);
  } else {
    return response;
  }

}


characterSchema.statics.insert = async function(data){
  const { _id } = data;
  const reponse = await this.findOne({ _id });

  if (reponse) {

    throw new ClientError("Character already exists", 409);

  } else {

    const dataCreted = await this.create(data);
    return dataCreted
  }
}

characterSchema.statics.delete = async function (id) {
  const response = await this.findByIdAndDelete(id);
  if (!response) {
    throw new ClientError("Character not found", 404);
  }
  return response;
};

characterSchema.statics.put = async function (id, data) {
  const response = await this.findByIdAndUpdate(id, data, {
    new: true, // Devuelve el documento modificado
  });
  if (!response) {
    throw new ClientError("Character not found", 404);
  }
  return response;
};


module.exports = characterSchema