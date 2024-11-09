import Button from '@mui/material/Button';

function ProfileButton() {
    const handleClick = () => {
        // Handle button click logic here
        console.log('Profile button clicked!');
    };

    return (
        <Button variant="contained" onClick={handleClick}>
            Profile
        </Button>
    );
}

export default ProfileButton;