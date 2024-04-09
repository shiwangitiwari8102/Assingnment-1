import Container from "./Container";

function Account() {
  return (
    <Container>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <h5 class="navbar-text">Account Setting</h5>
        </div>
      </nav>

      <div className="d-flex pt-3">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="ms-3"
          style={{ height: "40px", width: "40px", borderRadius: "50%" }}
          alt="profile"
        />
        <div className="ms-3">
          <h5>Marry Doe</h5>
          <p>Marry#@Gmail.com</p>
        </div>
      </div>

      <p className="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        officiis? adipisicing elit. Veniam, officiis?
      </p>
    </Container>
  );
}

export default Account;
