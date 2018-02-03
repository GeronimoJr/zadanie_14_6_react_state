var CounterFirst = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        })
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('h1', {}, 'Licznik pierwszy: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, 'Inkrementacja'),
            React.createElement('button', {onClick: this.decrement}, 'Dekrementacja')
        );
    }
});

