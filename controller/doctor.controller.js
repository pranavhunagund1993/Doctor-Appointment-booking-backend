// get doctor
const getDoctors = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "get doctors"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// add doctor
const addDoctor = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "add doctor"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// update doctor
const updateDoctor = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "update doctor"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// delete doctor
const deleteDoctor = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "delete doctor"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { getDoctors, addDoctor, updateDoctor, deleteDoctor }


