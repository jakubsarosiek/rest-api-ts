import mongoose, { Document, Schema } from 'mongoose';

export interface IPerson {
  name: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}

export interface IPersonModel extends IPerson, Document {}

const PersonSchema: Schema = new Schema({
  name: { type: String, required: true },
  birth_year: { type: String, required: true },
  gender: { type: String, required: true },
  homeworld: { type: String, required: true },
});

export default mongoose.model<IPersonModel>('Person', PersonSchema);

// export type PersonType = {
//   name: { type: string };
//   height: { type: string };
//   mass: { type: string };
//   hair_color: { type: string };
//   skin_color: { type: string };
//   eye_color: { type: string };
//   birth_year: { type: string };
//   gender: { type: string };
//   homeworld: { type: string };
//   films: [{ type: string }];
//   species: [{ type: string }];
//   vehicles: [{ type: string }];
//   starships: [{ type: string }];
//   created: { type: string };
//   edited: { type: string };
//   url: { type: string };
// };

// export const PersonSchema = new mongoose.Schema({
//   name: { type: String },
//   height: { type: String },
//   mass: { type: String },
//   hair_color: { type: String },
//   skin_color: { type: String },
//   eye_color: { type: String },
//   birth_year: { type: String },
//   gender: { type: String },
//   homeworld: { type: String },
//   films: [{ type: String }],
//   species: [{ type: String }],
//   vehicles: [{ type: String }],
//   starships: [{ type: String }],
//   created: { type: String },
//   edited: { type: String },
//   url: { type: String },
// });

// export const PersonModel = mongoose.model('Person', PersonSchema);
