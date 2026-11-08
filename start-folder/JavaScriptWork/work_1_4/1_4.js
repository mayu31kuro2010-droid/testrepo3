let wantApple = 4;
let stockApple = 3;

// 1. 在庫が希望数以上あるかを確認
if (stockApple >= wantApple) {
  console.log("希望通りカートに入れます。");
} else {
  console.log("在庫が足りません。在庫分だけカートに入れます。");
}

let i = 0;
// 2. 在庫が足りないため、実際にカートに入れる回数は「在庫数（stockApple）」にする
while (i < stockApple) {
  console.log("りんごをカートに追加しました");
  i++;
}
// 3. 実際に処理した回数（stockApple）分だけ、1から順にカウントして表示する
for (let j = 1; j <= stockApple; j++) {
  console.log(`リンゴを買うのは${j}回目の処理です`);
}