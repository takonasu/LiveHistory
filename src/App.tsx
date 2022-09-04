import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
import React from 'react';

import { liveHistory } from './data/liveHistory';

const App = () => {
	return (
		<div className="App">
			<Container>
				<Stack spacing={2}>
					<Typography>参加ライブ数：{liveHistory.length}公演</Typography>

					{liveHistory.map((live) => {
						return (
							<Card variant="outlined" key={live.day}>
								<CardContent>
									<Typography>{format(new Date(live.day), 'yyyy年MM月dd日')}</Typography>
									<Typography>{live.name}</Typography>
									<Typography>会場：{live.place}</Typography>
									<Typography>
										<a href={live.link}>外部リンク</a>
									</Typography>
								</CardContent>
							</Card>
						);
					})}
				</Stack>
			</Container>
		</div>
	);
};

export default App;
