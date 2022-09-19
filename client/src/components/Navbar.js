import  React  from 'react';
import { Title,Title2 } from './styled-component';


const img = `https://img.freepik.com/premium-vector/delicious-chef-logo-design-template-with-cute-details_429761-36.jpg`;
const img2 = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQny43mFwYhRHPE6mhrkWRzWldH6h2Q4YrWAw&usqp=CAU`;

const Navbar = () => {
    return(
        <>
        <Title>
        <section>
          <header>
            <a href='#' className='logo'><img src={img}/></a>
            <ul className='navigation'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
            </ul>
            <ul className='navigation2'>
              <li><a href='#'>SignIn</a></li>
              <li><a href='#'>LogOut</a></li>
            </ul>
          </header>
          <div className='content'>
            <div className='textbox'>
              <h2>Food Ordering Made<br/>Easy</h2><br/>
              <p>Get Started Today!</p>
              <a href='#'>Order Now</a><button>See Menu</button>
            </div>
            <div className='pizza'>
              <img src={img2}/>
            </div>
          </div>
          </section>
        </Title>
        <Title2>
          <div className='heading'>About</div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </Title2>
        </>
    )
}

export default Navbar;