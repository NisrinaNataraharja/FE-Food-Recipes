import Link from 'next/link';
import Logo from '../logo/index';


function SideBarAuth() {
  return (
    <div className="side col-sm-5 col-md-6 d-none d-sm-flex">
      <div className="icon text-center w-100">
        <Link href="/">
          <Logo width="100px" height="120px" color="#fff" />
        </Link>
      </div>
    </div>
  );
}

export default SideBarAuth;
