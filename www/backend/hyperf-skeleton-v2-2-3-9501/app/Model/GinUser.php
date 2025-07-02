<?php

declare (strict_types=1);
namespace App\Model;

use Hyperf\DbConnection\Model\Model;
/**
 * @property int $id 
 * @property string $name 
 * @property int $age 
 * @property \Carbon\Carbon $created_at 
 * @property \Carbon\Carbon $updated_at 
 * @property string $password 
 * @property int $is_del 
 */
class GinUser extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'gin_users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = ['id' => 'integer', 'age' => 'integer', 'created_at' => 'datetime', 'updated_at' => 'datetime', 'is_del' => 'integer'];
}