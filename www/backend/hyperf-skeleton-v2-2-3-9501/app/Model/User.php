<?php

declare (strict_types=1);
namespace App\Model;

use Hyperf\DbConnection\Model\Model;
/**
 * @property int $id
 * @property string $name
 * @property int $age
 * @property int $number
 * @property int $sort
 * @property int $test
 * @property int $qq
 * @property int $kk
 */
class User extends Model
{

    //默认情况下，Hyperf 预期你的数据表中存在 created_at 和 updated_at 。
    //如果你不想让 Hyperf 自动管理这两个列， 请将模型中的 $timestamps 属性设置为 false
    public $timestamps = false;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'user';
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
    protected $casts = ['id' => 'integer', 'age' => 'integer', 'number' => 'integer', 'sort' => 'integer', 'test' => 'integer', 'qq' => 'integer', 'kk' => 'integer'];
}
