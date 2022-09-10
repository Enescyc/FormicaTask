import { PageHeader } from "antd";

const title = <h3 style={{ color: 'white', fontWeight: 'bold' }}>Formica Task App</h3>
const subTitle = <h4 style={{ color: 'white', fontWeight: 'bold' }}>Task Managment</h4>
const logo = <img src="formica.svg" style={{ width: "150px", height: "36px" }}></img>



function MyHeader() {
    return (
        <PageHeader style={{color: '#888', width:'100%', height:'100%'}} 
        title={title}
        subTitle={subTitle}
        extra={logo}>

        </PageHeader>
    )
}

export default MyHeader;