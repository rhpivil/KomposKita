export const UpdateProfile = ({
  image,
  name,
  email,
  profileUpdateHandler,
  onChangeHandler,
}) => {
  // TODO: ADD CHANGE IMAGE PROFILE
  return (
    <>
      <form className="mt-4" onSubmit={profileUpdateHandler}>
        <div className="w-96 flex flex-col gap-2">
          <label className="label-text font-bold" htmlFor="fullname">
            Nama Lengkap<span className="text-red-600"> *</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChangeHandler}
            className="input rounded-none md:min-w-xl"
            id="fullname"
            required
          />

          <label className="label-text font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            className="input rounded-none md:min-w-xl"
            id="email"
            disabled
          />
        </div>
        <button className="btn rounded-sm mt-4">Simpan</button>
      </form>
    </>
  );
};
