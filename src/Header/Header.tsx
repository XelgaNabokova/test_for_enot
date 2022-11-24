import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
    return(
        <HeaderBlock>
            <h1>To Do</h1>
            <SettingsButton>
                <SSettingsIcon/>
            </SettingsButton>
        </HeaderBlock>
    )
}

const HeaderBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 17px 17px;
`
const SettingsButton = styled(IconButton)`
    padding: 0;
`
const SSettingsIcon = styled(SettingsIcon)`
    width: 30px;
    height: 30px;
    color: #F4F4F4;
`


export default Header