function SignIn({
  setEmail,
  setPasswd,
  submit,
  setSubmit,
  setCookie,
  identification,
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(true)
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-wrapper">
          <label>
            Email
            <input
              id="username"
              type="email"
              pattern="[a-z0-9-_]+[a-z0-9.-_]*@[a-z0-9-_]{2,}.[a-z.-_]+[a-z-_]+"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="input-wrapper">
          <label>
            Password
            <input
              type="password"
              minLength={2}
              required={true}
              id="password"
              onChange={(e) => setPasswd(e.target.value)}
            />
          </label>
        </div>
        <div className="input-remember">
          <label>
            <input
              onChange={(e) => setCookie(e.target.checked)}
              type="checkbox"
              id="remember-me"
            />
            Remember me
          </label>
          {!identification && submit ? (
            <span
              style={{
                color: 'red',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              identification error
            </span>
          ) : (
            ''
          )}
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  )
}

export default SignIn
