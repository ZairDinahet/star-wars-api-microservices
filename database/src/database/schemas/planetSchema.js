const { Schema } = require('mongoose')
const { ClientError } = require('../../utils/errors')


const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{type: String, ref: 'Character'}],
  films: [{type: String, ref: 'Film'}]
},)

planetSchema.statics.list = async function(){
  const response = await this.find()
  .populate('residents', ['_id', 'name'])
  .populate('films', ['_id', 'title'])
  
  if(!response){
    throw new ClientError("Planets not found", 404);
  } else {
    return response;
  }

};

planetSchema.statics.get = async function(id){
  const response = await this.findById(id)
  .populate('residents', ['_id', 'name'])
  .populate('films', ['_id', 'title'])

  
  if(!response){
    throw new ClientError("Planet not found", 404);
  } else {
    return response;
  }

}

planetSchema.statics.insert = async function(data){
  const { _id } = data;
  const reponse = await this.findOne({ _id });

  if (reponse) {

    throw new ClientError("Planet already exists", 409);

  } else {

    const dataCreted = await this.create(data);
    return dataCreted
  }
}

planetSchema.statics.delete = async function (id) {
  const response = await this.findByIdAndDelete(id);
  if (!response) {
    throw new ClientError("Planet not found", 404);
  }
  return response;
};

planetSchema.statics.put = async function (id, data) {
  const response = await this.findByIdAndUpdate(id, data, {
    new: true, // Devuelve el documento modificado
  });
  if (!response) {
    throw new ClientError("Planet not found", 404);
  }
  return response;
};

module.exports = planetSchema