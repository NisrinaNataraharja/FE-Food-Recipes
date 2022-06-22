import styles from './add.module.css'
import { Navbar } from '../../components'

const AddRecipe = () => {
  return (
    <div className="container mb-5">
      <Navbar/>
        <section className={styles.add}>
          <form>
          <div className="mb-3">
              <label htmlFor="photo" className="form-label me-2">
                Photo
              </label>
              <input
                type="file"
                className="form-control form-control-sm p-3"
                id="photo"
                placeholder="Photo"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="title"
                className="form-label me-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Required"
              >
              </label>
              <input
                type="text"
                className="form-control form-control-sm p-3"
                id="title"
                placeholder="Title"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="ingredients"
                className="form-label me-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Required"
              >
              </label>
              <textarea
                className="form-control"
                id="ingredients"
                rows="10"
                placeholder="Ingredients"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="video" className="form-label me-2">
                Video
              </label>
              <input
                type="file"
                className="form-control form-control-sm p-3"
                id="video"
                placeholder="Video"
              />
            </div>
            <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-warning w-100 text-light mb-2"
                >
                  Simpan
                </button>
            </div>
          </form>
        </section>
      </div>
  )
}

export default AddRecipe