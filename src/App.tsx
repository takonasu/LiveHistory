import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
import React from 'react';

import { ImageModal } from './components/ImageModal';
import { liveHistory } from './data/liveHistory';

const App = () => {
	return (
		<div className="App">
			<Container>
				<Stack spacing={2}>
					<Typography>参加ライブ数：{liveHistory.length}公演</Typography>

					{liveHistory
						.sort((a, b) => (a.day < b.day ? 1 : -1))
						.map((live) => {
							const [modalOpen, setModalOpen] = React.useState(false);
							const handleClose = () => {
								setModalOpen(false);
							};
							return (
								<>
									{live.ticketImg ? (
										<ImageModal imageName={live.ticketImg} modalOpen={modalOpen} handleClose={handleClose} />
									) : null}
									<Card
										variant="outlined"
										key={live.day}
										onClick={() => {
											if (live.ticketImg) {
												setModalOpen(true);
											}
										}}
									>
										<CardContent>
											<Typography>{format(new Date(live.day), 'yyyy年MM月dd日')}</Typography>
											<Typography>{live.name}</Typography>
											<Typography>会場：{live.place}</Typography>
											<Typography>
												<a href={live.link}>外部リンク</a>
											</Typography>
										</CardContent>
									</Card>
								</>
							);
						})}
				</Stack>
			</Container>
		</div>
	);
};

export default App;
