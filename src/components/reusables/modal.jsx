import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from 'next/link'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div  >
      <Button onClick={handleOpen} className= ' font-bold w-full h-[50px] lg:h-[35px] text-[black] rounded-[30px] bg-[#16a34a] hover:bg-[white]  ' >  Check Out</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='mx-[4em]'
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2" className=' text-center font-semibold'>
            Thank You
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className=' text-center'>
                Your Order has been placed

            </p>
            <div className=' flex justify-between pt-[2em]'>
               <Link href='/' ><p className=' underline hover:text-green'>
                Go Home
                
                </p></Link>

                <Link href='/Receipt' ><p className=' underline hover:text-green'>
                View Receipt
                
                </p></Link>
              
              
            </div>
          
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}