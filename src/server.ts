
import config from './config';
import app from './app';
import mongoose from 'mongoose';
// const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.prot, () => {
      console.log(`Blogs app listening on port ${config.prot}`);
    });
  } catch (error) {
    console.log(error);
  }
}

// console.log(config)

main()