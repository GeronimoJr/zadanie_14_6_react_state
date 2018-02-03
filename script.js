var App = React.createClass({
    
    render: function() {
        return (
            React.createElement('div', {className: 'boss'},
                React.createElement(CounterFirst, {},),
                React.createElement(CounterSecond, {},)
            )
        )
    },
});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));