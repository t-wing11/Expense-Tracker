from database import db

class Transaction(db.Model):
    __tablename__ = 'transactions'
    
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    
    def __init__(self, text, amount):
        self.text = text
        self.amount = amount
    
    def to_dict(self):
        return {
            'id': self.id,
            'text': self.text,
            'amount': self.amount
        }
    
    def __repr__(self):
        return f'<Transaction {self.id}: {self.text} - ${self.amount}>'