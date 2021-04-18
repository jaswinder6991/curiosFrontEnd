const Form = ({ errorMessage, onSubmit }) => (
  <>
  <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      Email
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
    focus:outline-none focus:shadow-outline" name="email" type="email"/>
  </div>
  <div className="flex items-center justify-between">
    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Sign in
    </button>
  </div>
  {errorMessage && <p className="error">{errorMessage}</p>}
</form>

{/* <form onSubmit={onSubmit} >
  <label>
    <span>Email</span>
    <input type="email" name="email" required />
  </label>

  <div className="submit">
    <button type="submit">Sign Up / Login</button>
  </div>

  {errorMessage && <p className="error">{errorMessage}</p>}

  <style jsx>{`
    form,
    label {
      display: flex;
      flex-flow: column;
      justify-content: center
    }
    label > span {
      font-weight: 600;
    }
    input {
      padding: 8px;
      margin: 0.3rem 0 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .submit {
      display: flex;
        justify-content: flex-end;
        align-items: center;
        justify-content: space-between;
      }
      .submit > a {
        text-decoration: none;
      }
      .submit > button {
        padding: 0.5rem 1rem;
        cursor: pointer;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit > button:hover {
        border-color: #888;
      }
      .error {
        color: brown;
        margin: 1rem 0 0;
      }
    `}</style>
  </form> */}
  </>
)

export default Form
