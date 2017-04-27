import React from 'react';
import {
	View,
	Text,
	ScrollView,
	Image,
	Linking,
	TouchableHighlight,
	Dimensions
} from 'react-native';

import moment from 'moment';

import SafeImage from '../common/SafeImage';
import css from '../../styles/css';
import logger from '../../util/logger';
import general from '../../util/general';

const ConferenceDetailView = ({ data }) => {
	logger.ga('View Loaded: Event Detail: ' + data.title);

	return (
		<View style={[css.main_container, css.whitebg]}>
			<ScrollView>
				<View style={css.news_detail_container}>
					<View style={css.eventdetail_top_right_container}>
						<Text style={css.eventdetail_eventname}>
							{data['talk-title']}
						</Text>
						<Text style={css.eventdetail_eventlocation}>
							{data.location}
						</Text>
						<Text style={css.eventdetail_eventdate}>
							{moment(Number(data['time-start'])).format('MMM Do YYYY, h:mm a')}
						</Text>
						<Text style={css.eventdetail_eventdate}>
							{moment(Number(data['time-start'])).format('MMM Do YYYY, h:mm a')}
						</Text>
					</View>

					<Text style={css.eventdetail_eventdescription}>
						{data['full-description']}
					</Text>

				</View>
			</ScrollView>
		</View>
	);
};

export default ConferenceDetailView;
