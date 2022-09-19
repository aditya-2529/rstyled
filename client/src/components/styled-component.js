import styled from 'styled-components';

export const Title = styled.section`
section{
    position: relative;
    width: 100%;
    min-height: 90vh;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #161616;
}
header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header .logo{
    padding-left: 20vh;
}
header .logo img{
    width: 30%;
    height: 30%;
}
header .navigation{
    position: relative;
    display: flex;
    margin-right: 30%;
}
header .navigation2 li a{
    display: inline-block;
    color: #fff;
    text-decoration: none;
}
header .navigation2{
    position: relative;
    display: flex;
}
header .navigation2 li{
    list-style: none;
    margin-left: 10px;
}
header .navigation li{
    list-style: none;
    margin-left: 10px;
}
header .navigation li a{
    display: inline-block;
    color: #fff;
    text-decoration: none;
}
.content{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.content .textbox{
    position: relative;
    padding-left: 30vh;
}
.content .textbox h2{
    color: #fff;
    font-size: 3em;
    margin-bottom: 10px;
}
.content .textbox p{
    color: red;
}
.content .textbox a{
    display: inline-block;
    margin-top: 20px;
    padding: 8px 20px;
    background: #d9bd00;
    text-decoration: none;
    color: #fff;
    border-radius: 40px;
}
.content .textbox button{
    display: inline-block;
    padding: 2px;
    text-decoration: none;
    color: #d9bd00;
    background: #161616;
}
.content .pizza{
    padding-right: 50vh;
}

`;

export const Title2 = styled.section`
.heading{
    font-size: 2em;
    padding-left: 30vh;
    padding-top: 2.5em;
}
p{
    padding-left: 35vh;
    padding-right: 10em;
    font-size: 1.5em;
    padding-top: 1.5em;
}
`;