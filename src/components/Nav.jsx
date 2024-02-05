import '../style/Nav.css';

function Nav() {
  return (
    <header className='container-fluid justify-content-between'>
        <div className='tittle-navbar'>
            <img src="https://cdn-icons-png.flaticon.com/512/412/412785.png" alt="icon" />
            <h1 className='tittle-primary'>
                LibrePelis
            </h1>
        </div>
    </header>
  );
}
export { Nav };