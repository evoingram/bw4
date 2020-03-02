module.exports = {
	confirmation: context => {
		return {
			channel: context.channel_id,
			text: 'DevDesk ticket created!',
			blocks: JSON.stringify([
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: '*DevDesk ticket created!*'
					}
				},
				{
					type: 'divider'
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: `*Title*\n${context.title}\n\n*Description*\n${context.description}`
					}
				},
				{
					type: 'context',
					elements: [
						{
							type: 'mrkdwn',
							text: `*category*: ${context.category}`
						}
					]
				}
			])
		};
	},
	modal: context => {
		return {
			trigger_id: context.trigger_id,
			view: JSON.stringify({
				type: 'modal',
				title: {
					type: 'plain_text',
					text: 'Submit a helpdesk ticket'
				},
				callback_id: 'submit-ticket',
				submit: {
					type: 'plain_text',
					text: 'Submit'
				},
				blocks: [
					{
						block_id: 'title_block',
						type: 'input',
						label: {
							type: 'plain_text',
							text: 'Title'
						},
						element: {
							action_id: 'title',
							type: 'plain_text_input'
						},
						hint: {
							type: 'plain_text',
							text: '30 second summary of the problem'
						}
					},
					{
						block_id: 'description_block',
						type: 'input',
						label: {
							type: 'plain_text',
							text: 'Description'
						},
						element: {
							action_id: 'description',
							type: 'plain_text_input',
							multiline: true
						}
					},
					{
						block_id: 'category_block',
						type: 'input',
						label: {
							type: 'plain_text',
							text: 'category'
						},
						element: {
							action_id: 'category',
							type: 'plain_text_input'
						},
						hint: {
							type: 'plain_text',
							text: 'React, JavaScript, HTML, CSS, Git, Node, Express, etc.'
						}
					}
				]
			})
		};
	}
};
