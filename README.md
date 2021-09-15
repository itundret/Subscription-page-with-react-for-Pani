# Subscription-page-for-Pani-energy
A user’s subscription fee is based on the specific features to which they are subscribed. This way, the user only pays for the features in which they see the greatest value

# Requirements
1. Create the supporting client-side view using React and TypeScript
2. A feature may have N sub-features. In other words, features and their sub-features are
arbitrarily nested.

# Approach, assumptions, and decision making process
I thought the screenshot's feature can be fixed through the dropdown tree view method.
The point here is that each feature may have N sub-features dynamically.
So, I decided to make the tree view using recursive approach.
At first, I made the parent node. And if this parent node has the child ones, I did the recursive  call until there is no child nodes anymore.


# Install & Run
npm install, npm start  or  yarn install, yarn start
