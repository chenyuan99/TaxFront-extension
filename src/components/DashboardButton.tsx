import Button from '@mui/material/Button';

function DashboardButton() {
    const handleClick = () => {
        // Handle button click logic here
        console.log('Dashboard button clicked!');
    };

    return (
        <Button variant="contained" onClick={handleClick}>
            Dashboard
        </Button>
    );
}

export default DashboardButton;