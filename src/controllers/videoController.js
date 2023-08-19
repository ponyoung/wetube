import Video from "../models/Video";

// Video.find({}, (error, videos) => {});

export const home = async (req, res) => {
  const videos = await Video.find({}); ///// js will wait
  return res.render("home", { pageTitle: "Home", videos }); // return보다 호출하는 함수가 중요함 (render을 두번 호출할 수 없음.)
};
export const watch = (req, res) => {
  // const id = req.params.id ---> ES6!!
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};
