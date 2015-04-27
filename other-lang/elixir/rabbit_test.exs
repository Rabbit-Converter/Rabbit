defmodule RabbitTest do
  use ExUnit.Case

  """
  	Uni to Zawgyi Test
  """
  test "uni to zawgyi" do
    {_, raw} = File.read "test/sample.json"
    {:ok, sample} = JSX.decode raw
    check_uni_2_zg(sample["uni"], sample["zg"])
  end

  """
    Zawgyi to Uni Test
  """
  test "zawgyi to uni" do
    {_, raw} = File.read "test/sample.json"
    {:ok, sample} = JSX.decode raw
    check_zg_2_uni(sample["zg"], sample["uni"])
  end

  defp check_uni_2_zg([], []) do
    "Finished"
  end 

  defp check_uni_2_zg(uni, zg) do
     assert Rabbit.uni2zg(hd(uni)) == hd(zg)
     check_uni_2_zg(tl(uni), tl(zg))
  end

  defp check_zg_2_uni([], []) do
    "Finished"
  end 

  defp check_zg_2_uni(zg, uni) do
     assert Rabbit.zg2uni(hd(zg)) == hd(uni)
     check_zg_2_uni(tl(zg), tl(uni))
  end

end
