import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

  onDescription = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };

  onNote = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescription}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note"
            value={this.state.note}
            onChange={this.onNote}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}