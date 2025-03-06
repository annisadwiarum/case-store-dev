<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_number', 88)->unique();
            $table->date("invoice_date");
            $table->string('name', 255);
            $table->text('address')->nullable();
            $table->string('phone_number')->nullable();
            $table->unsignedBigInteger('payment_options_1_id')->nullable();
            $table->unsignedBigInteger('payment_options_2_id')->nullable();
            $table->unsignedBigInteger('bill_issuer_id')->nullable();
            $table->timestamps();

            $table
                ->foreign('payment_options_1_id')
                ->references('id')
                ->on('invoice_payment_options')
                ->constrained()
                ->cascadeOnUpdate()
                ->nullOnDelete();

            $table
                ->foreign('payment_options_2_id')
                ->references('id')
                ->on('invoice_payment_options')
                ->constrained()
                ->cascadeOnUpdate()
                ->nullOnDelete();

            $table
                ->foreign('bill_issuer_id')
                ->references('id')
                ->on('users')
                ->constrained()
                ->cascadeOnUpdate()
                ->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
