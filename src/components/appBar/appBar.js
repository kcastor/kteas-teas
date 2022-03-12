import react from "react";
import { appBarStyles, appBarItem,appBarItems, appBarItemGroup } from './styles'

function appBar(props) { 
    return (
        <appBarStyles>
      
            <appBarItems>
                <appBaritem>KTeas Emporium</appBaritem>
                <appBarItemGroup><span>email</span><span>profile</span><span>settings</span></appBarItemGroup>
            </appBarItems>
            </appBarStyles>
    )
}


export default appBar