import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Person from '../models/Person';

// export const createPerson = async (
//   req: express.Request,
//   res: express.Response,
// ) => {
//   try {
//     const Person = await createPersonHandler(req.body);
//     Person.save();
//   } catch (error) {
//     console.log(error);
//     return res.status(409).send(error);
//   }
// };

//export const createPerson = (values: Record<string, any>) => new PersonModel(values).save().then((user) => user.toObject());

const createPerson = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, birth_year, gender, homeworld } = req.body;

  const person = new Person({
    _id: new mongoose.Types.ObjectId(),
    name,
    birth_year,
    gender,
    homeworld,
  });
  try {
    await person.save();
    return res.status(201).json({ person });
  } catch (error) {
    return res.status(500).json({ error });
  }
  // return await person.save();

  // return person
  //   .save()
  //   .then(person => )
  //   .catch(error => res.status(500).json({ req }));
};

const readPerson = (req: Request, res: Response, next: NextFunction) => {
  const personId = req.params.personId;

  return Person.findById(personId)
    .then(person =>
      person
        ? res.status(200).json({ person })
        : res.status(404).json({ message: 'not found' }),
    )
    .catch(error => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
  return Person.find()
    .then(peoples => res.status(200).json({ peoples }))
    .catch(error => res.status(500).json({ error }));
};

const updatePerson = (req: Request, res: Response, next: NextFunction) => {
  const personId = req.params.personId;

  return Person.findById(personId)
    .then(person => {
      if (person) {
        person.set(req.body);

        return person
          .save()
          .then(person => res.status(201).json({ person }))
          .catch(error => res.status(500).json({ error }));
      } else {
        return res.status(404).json({ message: 'not found' });
      }
    })
    .catch(error => res.status(500).json({ error }));
};

const deletePerson = (req: Request, res: Response, next: NextFunction) => {
  const personId = req.params.personId;

  return Person.findByIdAndDelete(personId)
    .then(person =>
      person
        ? res.status(201).json({ person, message: 'Deleted' })
        : res.status(404).json({ message: 'not found' }),
    )
    .catch(error => res.status(500).json({ error }));
};

export default {
  createPerson,
  readPerson,
  readAll,
  updatePerson,
  deletePerson,
};
