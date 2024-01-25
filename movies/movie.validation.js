import Yup from "yup";

export let movieValidationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required.")
    .trim()
    .max(55, "Name must be at max 55 characters."),
  language: Yup.string()
    .required("Language is required.")
    .max(55, "Language must be at max 55 characters."),
  genres: Yup.array().of(
    Yup.string().oneOf([
      "Action",
      "Thriller",
      "Drama",
      "Sci-Fi",
      "Crime",
      "Horror",
      "Adventure",
      "Mystery",
      "Documentary",
      "Comedy",
    ])
  ),
  duration: Yup.number().required("Duration is required").min(0),
  rating: Yup.number().required("Rating is required"),
});
