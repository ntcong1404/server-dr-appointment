const Service = require("../models/serviceModel");

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    return res.send(services);
  } catch (error) {
    res.status(500).send("Unable to get services");
  }
};

const addService = async (req, res) => {
  try {
    const service = await Service({
      name: req.body.name,
      img: req.body.img,
      desc: req.body.desc,
    });
    await service.save();

    return res.status(201).send("Application submitted successfully");
  } catch (error) {
    res.status(500).send("Unable to submit application");
  }
};

const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.serviceId);

    return res.send("Service deleted successfully");
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Unable to delete service");
  }
};

const addContentObject = async (req, res) => {
  try {
    const doc = await Service.findById(req.body.serviceId); // Tìm kiếm tài liệu cần cập nhật
    if (!doc) {
      res.status(500).send("Not found service");
      return;
    }

    // Tạo đối tượng mới
    const newContentObject = {
      title: req.body.title,
      description: req.body.description,
    };

    doc.content.push(newContentObject); // Thêm đối tượng mới vào mảng content

    await doc.save(); // Lưu tài liệu đã được cập nhật

    res.status(201).send("Add content successfully");
  } catch (error) {
    res.status(500).send("Unable to add content");
  }
};

const deleteContentObject = async (req, res) => {
  try {
    const doc = await Service.findById(req.params.serviceId); // Tìm kiếm tài liệu cần cập nhật
    if (!doc) {
      res.status(500).send("Not found service");
      return;
    }
    doc.content.id(req.params.contentId).remove();
    await doc.save(); // Lưu tài liệu đã được cập nhật

    res.status(201).send("Delete content successfully");
  } catch (error) {
    res.status(500).send("Unable to delete content");
  }
};

module.exports = {
  getAllServices,
  addService,
  deleteService,
  addContentObject,
  deleteContentObject,
};
