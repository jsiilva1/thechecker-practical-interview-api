import mongoose from 'mongoose';

import bootstrapEnvironment from '../../lib/bootstrap';
bootstrapEnvironment();

/**
 * Connect with mongodb database
 *
 * @return {*}.
 */
module.exports = async () => {
  try {
    const { 
      MONGO_HOST, 
      MONGO_PORT, 
      MONGO_MAIN_COLLECTION 
    } = process.env; 

    const uri = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_MAIN_COLLECTION}`;

    const tryToConnect = await
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
      
    return tryToConnect;
  } catch (err) {
    throw new Error(err);
  }
};