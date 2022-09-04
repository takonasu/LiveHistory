import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
import React from 'react';

import { liveHistory } from './data/liveHistory';

function App() {
	return (
		<div className="App">
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
		</div>
	);
}

export default App;
