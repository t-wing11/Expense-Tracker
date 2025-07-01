from flask import Flask, jsonify, request
from flask_cors import CORS
from database import db
from models import Transaction

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///expenses.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    CORS(app)

    with app.app_context():
        db.create_all()

        @app.route('/expenses', methods=['GET'])
        def list_expenses():
            transactions = Transaction.query.all()
            return jsonify([transaction.to_dict() for transaction in transactions])
        
        @app.route('/expenses', methods=['POST'])
        def add_expense():
            data = request.json
            new_transaction = Transaction(
                text=data['text'],
                amount=data['amount'],
            )
            db.session.add(new_transaction)
            db.session.commit()
            return jsonify(new_transaction.to_dict()), 201
        
        @app.route('/expenses/<int:id>', methods=['DELETE'])
        def delete_expense(id):
            transaction = Transaction.query.get_or_404(id)
            db.session.delete(transaction)
            db.session.commit()
            return jsonify({'message': 'Transaction deleted successfully'}), 204
        
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=5000)

