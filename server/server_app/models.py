from django.db import models
from decimal import Decimal

class Food(models.Model):
    food_name = models.CharField(max_length=255)
    price_after_discount = models.DecimalField(max_digits=10, decimal_places=0)
    discount_rate = models.DecimalField(max_digits=5, decimal_places=2)
    supermarket = models.ForeignKey('Supermarket', on_delete=models.CASCADE)
    last_updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.food_name

class Supermarket(models.Model):
    name = models.CharField(max_length=255)
    supermarket_id = models.CharField(max_length=255)
    # address = models.CharField(max_length=255)

    def __str__(self):
        return self.name
