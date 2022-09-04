import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import * as React from 'react';

export const Footer: FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Typography variant="h6" component="div" align="center">
					<a href="https://twitter.com/ITF_tako" style={{ color: 'inherit', textDecoration: 'none' }}>
						© takonasu
					</a>
				</Typography>
			</AppBar>
		</Box>
	);
};
