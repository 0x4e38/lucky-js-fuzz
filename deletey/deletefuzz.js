
function deleteEverything()
{
	//JS�е�delete�ɲ���c++��delete��deleteֻ������ɾ�������һ�����Զ��ѡ����ԣ����������ǻ���Ҫ�����б�
	var maximum = rand(40);
	for(var i = 0; i <  maximum; i++)
	{
		var tmpItem = getRandomKeyValuePairStr2();
		var out = "try{ delete " + tmpItem + "; } catch(e) {}; \n";
		g_fuzzingStmtTank.push ( out );
	}
}
